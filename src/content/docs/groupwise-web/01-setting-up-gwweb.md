---
title: Setting up Groupwise Web
description: How to configure Groupwise Web for Groupwise 24.4
---

This is a very quick and dirty guide to installing Groupwise Web for Groupwise 24.4 in an environment where:
 - We are using Self-Signed certificates
 - It is not publicly exposed
 - It is all on the same machine

You shouldn't need to change too much about this setup for other environments (probably just the SSL certs) but your milage may vary.

## Step 1: Install Docker
On the server where you want to run web, run these commands:

```sh
sudo zypper install docker
sudo systemctl enable docker
sudo systemctl start docker
docker run hello-world
```

These will:
- Install Docker
- Enable and Start the docker services
- Run the hello-world test container to confirm it is all working

## Step 2: Configure your SSL Certificates

These Instructions are only relevant for self signed, just copy your purchased ssl certificates into this directory if you use commercial certs.

```sh
sudo mkdir -p /opt/novell/gw/certs
cd /opt/novell/gw/certs

sudo openssl req -newkey rsa:2048 -nodes -keyout server.key -x509 -days 365 -out server.crt -subj "/CN=<YOUR DOMAIN NAME>" -addext "subjectAltName=DNS:<YOUR DOMAIN NAME>"
```

Replacing `<YOUR DOMAIN NAME>` with the domain you wish to use for the container.

## Step 3: Run The Configuration Container

Some errors are normal here, but those are to be expected.\
When asked if you want to verify the DVA's I chose not to, but it may work anyway

```sh
sudo docker run -it -v /optovell/gw:/config -e GWADMIN_SERVICE=admin@<GROUPWISE ADMIN IP>:9710 -e GWSOAP_HOST_DEFAULT=<YOUR POA AGENT IP> mfgroupwise/web-config
```

Replacing `<GROUPWISE ADMIN IP>` with the IP that you access the Groupwise Admin Console with
and `<YOUR POA AGENT IP>` with the IP that your Post Office Agent is running on.

## Step 4: Optionally fix any references to your FQDN
This should only be needed if your services are not on a DHCP service, as the container will have configured it to use the Domain Name instead of the IP. You may be able to avoid this using /etc/hosts but this is not tested.

Simply change the domain names to their IP addresses in `/opt/novell/gw/web.conf` and `/opt/novell/gw/dvas.conf`

## Step 5: Run the Container
If everything goes to plan, this command should work.

```sh
sudo docker run --rm -d -v /opt/novell/gw:/etc/nginx/gw -e FQDN=<YOUR DOMAIN NAME> -e DNS_SERVER=<A DNS SERVER LIKE 8.8.8.8 OR YOUR DNS> -p 80:80 -p 443:443 -v  /opt/novell/gw/certs:/certs -v /opt/novell/gw/logs:/var/log/nginx -e GWSOAP_SSL_VERIFY=off mfgroupwise/web:latest
```

Replacing `<YOUR DOMAIN NAME>` with the domain that Groupwise Web will be accessed from, and `<A DNS SERVER LIKE 8.8.8.8 OR YOUR DNS>` with either a public resolver like 8.8.8.8 or 1.1.1.1 or your selfhosted DNS server.

If everything goes to plan, this should work.