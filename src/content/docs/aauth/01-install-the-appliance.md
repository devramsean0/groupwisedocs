---
title: Install the Appliance
description: How to install the AAuth appliance
---

The Advanced Authentication server needs to be on it's own VM or physical server. It cannot share with the rest of the Groupwise/LDAP setup.

I'm assuming that you have a copy of the ISO.

YOU NEED EITHER YOUR OWN DNS SERVER OR A PUBLICLY EXPOSED INSTANCE WITH A DNS RECORD!!! IT WILL NOT WORK OTHERWIWSE.\
If you want a local DNS server I would sugget the [Yast2 DNS Server](https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-dns.html) which you should add as a dns server on aauth, your machine and the oes server.

## Step 1: Installation
1. Create a VM and attach the ISO to it, or burn a USB and install it that way. At the time of writing, the server is SUSE Linux Enterprise 12.
2. Do the install, It will do the majority itself
3. Choose a root password and vaadmin password
4. Choose a time server
5. Enter a FQDN as a hostname like aauth.example.com (THIS MUST BE THE SAME AS YOUR DNS)
6. Select a static IP and configure it apropriately setting a DNS server.
7. It will now reboot and land you back at a login prompt, login as root

## Step 2: Generate a SSL certificate
this may not be neccessary, and definitly won't be needed if you use commercial SSL certificates (you can just import them as I do below)

Create a holding directory, and CD into it.

Then create a server_ext.cnf file using a editor like vim or nano with the following content

```
basicConstraints = CA:FALSE
nsCertType = server
nsComment = "OpenSSL Generated Server Certificate"
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid,issuer:always
keyUsage = critical, digitialSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
IP.1 = <YOUR AAUTH SERVER IP>
DNS.1 = <YOUR AAUTH FQDN>
```

And then execute the following commands

```sh
openssl genrsa -out server.key.pem 4096
openssl req -new -key server.key.pem -out server.csr
openssl x509 -req -days 730 -in server.csr -sign
key server.key.pem -out server.crt -extfile server_ext.cnf
openssl x509 -in server.crt -text -noout
cat server.key.pem >> server.crt
```

You then want to download the resulting server.crt file.\
The previous commands will generate a certificate with the correct information so that Groupwise will trust it.

## Step 3: Import the SSL certificate
1. Navigate to https://<YOUR AAUTH SERVERS DOMAIN>/admin
2. Log in with the username LOCAL\admin and the password you set for the admin user
3. On the left go down to "Server Options"
4. Click the cog on the TLS row in the certificate manager
5. Upload your downloaded server.crt file
6. It should then upload successfully and when you close the modal the Subject information should update. If it hasn't, try the upload again

The next article in the series will cover configuring AAuth for Groupwise