"use strict";
const db = {
    filterUsers: (filter) => {
        let user1 = {
            admin: true
        };
        let user2 = {
            admin: true
        };
        return [user1, user2];
    }
};
const admins = db.filterUsers(function () {
    return this.admin;
});
// 箭头函数中不能包含 this
// const admins = db.filterUsers((this: User) => {
//   return this.admin
// })
