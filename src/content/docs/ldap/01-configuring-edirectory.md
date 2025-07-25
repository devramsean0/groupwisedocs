---
title: Configuring eDirectory
description: How to setup an eDirectory LDAP server on Open Enterprise Server.
---

This article assumes the following from your environment:
- Single service eDirectory
- A basic directory tree

## Step 1: Configure OES
If you haven't already got a Open Enterprise Server running. Go ahead and create one,
When asked for a role choose the eDirectory one as that gives you some defaults.

Configure the rest of the setup like any other Linux server.

When asked to configure your network ensure the following:
- You set a FQDN as a hostname (eg oes.example.local)
- You set a static IP
- You add a nameserver like Google's or an internal one

When you get to the Choose installation type, pick "Express"

## Step 2: Install eDirectory
After you get to the Express Installation, page. enter the following information:

| Label | Value | Explanation |
| --- | --- | --- |
| NTP Time Server | A time server | I like time.cloudflare.com |
| New or Existing Tree | new ||
| eDirectory Tree Name | The name of your new LDAP tree | e.g, greenfrogtest |
| FDN of tree admin | Enter cn=admin,o={YOUR ORG} | This wil create an admin user with {YOUR ORG} as the context |
| Admin Password & Verify Admin Password | A Password | This is the password for the admin user. Choose carefully! |
| Enter Server Context | Leave Default | This is automatically filled in with the context |
| Directory Information Base | Leave Default | This is a good place to leave it! |

When asked if you want to keep SLP multicast, click yes.

If you don't have a static IP, this will fail. 

## Step 3: After Installation
Now, you should install the OES Unified Management Console (UMC) This provides quick links to things like the identity console.

1. Log in as an admin to the desktop environment,
2. Click Activities } Search OES Install } Click the OES Install app
3. Scroll down on the left to "OES Unified Management Console" and click the tickbox
4. Click Accept down at the bottom right

And then you will be able to access the UMC on the server's IP

## Step 4: Open the Identity Console
1. Log in to the server's UMC using your LDAP credentials (`cn=admin,o={YOUR ORG}` {YOUR ORG} being the same thing you set it to).\
2. Click the identity console link on the left.\
3. Go to User Management button
4. Press the + button on the top row, pick a username and choose the root context. Complete all required inputs at the bottom. Then press create
5. Then press the home button, Then press the Certificate Management button TODO
