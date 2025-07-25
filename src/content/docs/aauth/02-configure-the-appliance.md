---
title: Configure the Appliance
description: How to configure the appliance for Groupwise
---

## Step 1: Add your LDAP Repository
LDAP is how Advanced Authentication and Groupwise communicate. It also acts as a central user store/source of truth.

1. Navigate to the Repositories page using the sidebar
2. Click "New LDAP repo"
3. Change the LDAP type to "eDirectory" (if you are using an eDirectory LDAP server)
4. Set a name for your repository
5. Set the Base DN to `,o=<YOUR ORG>` replacing `<YOUR ORG>` like in my previous examples.
6. Set the User to `cn=admin,o=<YOUR ORG>`
7. Enter the password for the admin user.

Near the bottom of the page there is a LDAP Servers option:
1. Press the "Add Server" button
2. Enter the IP address of the OES/eDirectory server
3. Change the port from 389 to 636
4. Set SSL to on
5. Press the green tick button.

7. Press the Full Syncronization button
8. If that works, press Save

## Step 2: Create the Groupwise Endpoint
While you are logged into the same admin dashboard as previously, you need to do the following:

1. Naigate to the Endpoints page using the sidebar
2. Create a new Endpoint
3. Call it Groupwise
4. Set Software to Groupwise
5. Enable it
6. Press Save and take not of the Endpoint ID and Secret, you will need this later.

## Step 3: Configure a Method
We will configure a QR code compatible TOTP code

1. Navigate to the Methods pane
2. Click on "OAUTH OTP"

Within the TOTP card do the following:
1. Enable Google Authenticator QR Code (This will work for any authenticator that asks you to scan a QR code)
2. Click Save

## Step 4: Configure your Chain
1. Navigate to Chains
2. Click New Chain
3. Set the chain to a recognisable name like "TOTP"
4. Ensure it is enabled
5. Select the TOTP method in the avaliable column and move it to the Used column by clicking it.
6. In the Repos, Roles and Groups input add "ALL USERS" it should show up in the dropdown part way through

## Step 5: Create your Events
Events are what Groupwise Uses to talk to advanced authentication partially. You need to create 2 different events.\
Navigate to the events page.

### Create a Generic Event
Generic Events are used on older Groupwise Clients, but are just as useful.

1. Click New Event
2. Give it a name like "Groupwise Generic"
3. Set the Event type to generic
4. Add the Chain you just created by clicking on it so it moves to the Used section
5. Add the Groupwise Endpoint here too.
6. Press Save

### Create a Oauth Event
Oauth events are used on new Groupwise Clients like Groupwise Web and the Admin panel

1. Click New Event
2. Give it a name like "Groupwise Oauth"
3. Change the event type to "OAuth2 / OpenID Connect"
4. Add the Chain like you did for the Generic Event
5. Copy the Client ID and Secret. You will need this later
6. Click Save

## Time to Enroll!
So, you now have a method and a chain and all the basic building blocks, but now you need to enroll a user to test with.

Navigate to your root DNS record in the browser, so like `https://<YOUR AAUTH FQDN>` and login with a user on your LDAP repository.

Under your "Enrolled Single Methods for sign in" header. Click the add button.
Choose TOTP and follow it's instructions scanning the QR Code.

You should then be automatically added to the chain you created earlier.