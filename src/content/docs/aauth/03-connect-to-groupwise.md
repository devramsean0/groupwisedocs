---
title: Connect to Groupwise
description: How to connect the appliance to Groupwise
---

1. Navigate back to the Groupwise Administration portal.
2. Go to System } Advanced Authentication
3. Click New at the top
4. Give the server a name
5. Set the hostname to the FQDN of the AAuth server that you used for enrollment
6. Ensure "Enable multi-factor authentication" is ticked

Then we need to configure the events for Groupwise using the details we used before.

1. Navigate to the Endpoint tab
2. Enter the same name you used when you created the generic event in both the Name and Event Name fields.
3. Copy the Endpoint ID that you saved earlier into the Endpoint ID field
4. Copy the Endpoint Secret that you saved earlier into the Endpoint Secret field

Now, you need to configure the Oauth2 Event

1. Navigate to the OAuth2 tab
2. Set the name to the name that you called the oauth event in Advanced Authentication
3. Copy the Client ID that you saved earlier into the Client ID field
4. Copy the Client Secret that you saved earlier into the Client Secret field
5. Copy the Redirect URI's to your clipboard.
6. In a seperate tab, navigate back the admin area of the main Advanced authentication portal (https://{YOUR AAUTH SERVERS DOMAIN}/admin)
7. Reopen the OAuth Event you created earlier
8. Copy the Redirect URI's into the redirect URI's field.
9. Click Save
10. Click Close

Now, you need to enable Advanced Authentication on the post office.
1. In the Groupwise Administration Pamel
2. Navigate to Post Offices } Your Post Office } Client Options } Security
3. set the Advanced Authentication dropdown to Enabled or Required (enable will mfa if enrolled, required will force it and stop anyone who is not enrolled)
4. Click OK

Now, It's testing time!
1. Open the Groupwise Desktop app and access the server settings (click cancel instead of entering your password).
2. Change the username to your enrolled user
3. Change the host to your Groupwise server
4. Cick Sign in
5. It should bring up a prompt for your MFA code after password authentication, Enter it and it should let you in.