---
title: Configuring Groupwise for eDirectory
description: Configure Groupwise for eDirectory
---

This assumes you have a basic Groupwise installation already. Installation of Groupwise is not hard though.

## Step 1: Log in to the Administration Interface.
Real simple, Just log in to the GW Administration interface as the admin user. The interface is at port 9710.

## Step 2: Add the eDirectory server to the system
1. Go to System > LDAP Servers > New Directory
2. Give it a name like eDirectory
3. Fill in the FQDN (if DNS) and click the "Use SSL button"
4. For the SSL Certificate, upload the cert you downloaded from the Identity Console
5. Enter the username in LDAP format (`cn=admin,o=<YOUR ORG>`) and enter the admin password from earlier.
6. Under Base dn enter the organizational unit part (`o=<YOUR ORG>`)
7. Choose your domain under Sync Domain and enable syncronization.
8. Press the Test Connection button, it should work
9. Navigate to the LDAP Authentication tab, and entier the username in LDAP format and the password
10. Click OK

## Step 3: Add the LDAP server to the system
1. In the same LDAP Server menu, click the New LDAP server option
2. Give it a name
3. Choose the Directory you just created as the Directory
4. Add the same host name and port and ssl certificate as before.
5. Navigate to the Post offices tab
6. Move your PostOffice from Avaliable to Selected
7. Click Ok
8. Close out of the menu

## Step 4: Import Users
This is where you link or create your users based on the LDAP tree.

1. Navigate to System > User Import
2. Choose your Post Office
3. Leave the context empty
4. Leave the LDAP filter empty
5. Select Search Sub Tree
6. Click Preview
7. You should have users to import, Click "Import Users"
8. Under Users you should now be able to see your LDAP users with an association under a users General Tab

## Step 5: Switch Authentication in your Post Office

1. Open your Post Office
2. Go to the Security Tab
3. Select LDAP authentication instead of Groupwise Authentication
4. Select the LDAP server and move it from avaliable to selected
5. Log into Groupwise and give it a test!


