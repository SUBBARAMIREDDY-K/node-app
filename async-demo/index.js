console.log('Before');
getUser(1, getRespositories);
console.log("After");

function getRespositories(user){
    getRespositories(user.gitHubUsername,getCommits);
}

function getCommits(repos)
{
    getCommits(repo,displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}



 
function getUser(id,callback) {
    setTimeout(() => {
        console.log("Reading a user from a database...");
        callback({id: id, gitHubUsername: 'ksram'});
        
    }, 2000);
}


function getRespositories(username,callback) {
    setTimeout(() => {
        console.log("Calling Github API...");
        //callback(['repo1','repo2','repo3']);
    }, 2000);
} 



//Methods to deal with the asynchronous nature of the code
//callback
//promises
//async/await

console.log("Before")
getCustom(1)
        .then(user =>getCustomRepo(user.gitHubUsername))
        .then(repos => getCustomCommits(repos[0]))
        .then(commits=> console.log('commits',commits));
console.log("After")

//Promises
function getCustom(id){
    return new Promise((resolve,reject) => {
        console.log("Reading a user from a database...");
        resolve({id:id,gitHubUsername:'ksram'});
       setTimeout(() => {},2000);
    });
}

function getCustomRepo(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Calling Github API...");
            resolve(['repo1','repo2','repo3']);
        },2000);
    });
}

function getCustomCommits(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Calling Github API...");
            resolve(['commit']);
        },2000);
    })
}


//Async Await apporach



async function displayCustom() {
    const user = await getCustom(12);
    const repos = await  getCustomRepo(user.gitHubUsername);
    const commits = await getCustomCommits(repos[0]);
    console.log(commits);
}
displayCustom();



