/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from "../data/users";

// const array = Object.keys(users)
//       .map(function(key) {
//         return [key,users[key]]
//         });
/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
// users.map(formatUser)

const formatUser = (title) => {

    const mapping = users.map(function (user) {
        const array = {
            name : title + ". " + user.name,
            age : user.age,
            major : user.major,
        }

        

        return array
        // return {user}
    })

    // function wait(){
    //     setTimeout(() => {
    //         return mapping
    //     }, 3000)
    // }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mapping)
        }, 3000)
    })
    

    // return mapping

}



// const formatUser = (title) => {
//     array.map(function(name) {
//         return name
//     })
// };

// const formatUser = users.map(item => {
//     const container = {};

//     container[item.name];
//     // container.age = item.name.length * 10;

//     return container;
// })

// const myPromise = Promise(function(myResolve) {
//     setTimeout(function(){myResolve(formatUser)}, 3000)
// })

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (name) => {

    const finding = users.find(function (user) {
        return user.name = name
    })

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(finding)
        }, 2000)
    })

    // return finding

};

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (major) => {

    const filtering = users.filter(function (user) {
        return user.major = major
    })

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(filtering)
        }, 4000)
    })

    // return filtering

};

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export { formatUser, findByName, filterByMajor }