interface User {
  admin: boolean
}

interface DB {
  filterUsers(filters: (this: User) => boolean): User[]
}

const db: DB = {
  filterUsers: (filter: () => boolean) => {
    let user1: User = {
      admin: true
    }
    let user2: User = {
      admin: true
    }

    return [user1, user2]
  }
}

const admins = db.filterUsers(function(this: User) {
  return this.admin
})

// 箭头函数中不能包含 this
// const admins = db.filterUsers((this: User) => {
//   return this.admin
// })