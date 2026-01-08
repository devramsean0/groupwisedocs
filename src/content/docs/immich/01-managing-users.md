---
title: Adding a User to Immich
description: How to add a new user to the Immich Instance
---
You need to be an admin for all of these steps

# Adding Users to Immich

1. Visit `https://<IMMICH SERVER URL>/admin/users`
2. Click "Create User" in top corner
![User Management Page With arrow](../../../assets/immich//user-management/01-users-list-page-add.png)
3. Enter the user's details, and optionally force them to create a new password when they log in.
    You can ignore the Quota Size limit as this is unimportant for a normal setup. and you can optionally make them an admin (letting them reset others passwords & create/delete users and shared folders)
![User Creation Dialogue](../../../assets/immich/user-management/02-create-user-dialogue.png)
4. Let them log in

# Delete Users
1. visit `https://<IMMICH SERVER URL>/admin/users`
2. Click view next to the user
![User Management Page with arrow to view](../../../assets/immich/user-management/03-users-management-manage-user.png)
3. Click the red DELETE button (You can't delete yourself or the 1st admin)
![User Delete button](../../../assets/immich/user-management/04-user-delete.png)

# Managing Users
1. visit `https://<IMMICH SERVER URL>/admin/users`
2. Click view next to the user
![User Management Page with arrow to view](../../../assets/immich/user-management/03-users-management-manage-user.png)
3. From here you can reset their password (will generate a temporary password and then ask them to change it on next login)
![User Reset Password](../../../assets/immich/user-management/05-users-reset-password.png)
4. You can also edit their username or email here
![User Edit button](../../../assets/immich/user-management/06-users-edit.png)