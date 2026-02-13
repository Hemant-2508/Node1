// const a=() =>{
//     setTimeout(() =>{
//     console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
// },0);

//     b();
//     console.log("Hello World");
// };
// const c=() =>{
   
//     console.log("👍👍👍👍👍👍👍👍👍");
// };
// a();


const a = () => {
    setTimeout(() => {
        console.log('🚀 async function 1:');
    }, 0);
    
    b();
    console.log('🚀 ~ a ~ a');
};
const b = () => {
    setTimeout(() => {
        console.log('🚀 async function 2:');
    }, 0);
    console.log('🚀 ~ b ~ b');

    Promise.resolve().then(() => {
        console.log('🚀 async function 3:');
    });
};
a();

