const arr1=[345, 'hello', false,console.log];

console.log(arr1);
console.log(typeof arr1);

const movies =['Bahubali','kgf','Asur','Vampire Diaries', 'interstellar','RRR'];
console.log(movies.length);
console.log(movies);

//indexing
console.log(movies[4]);
console.log(movies[10]);

//negative indexing
console.log(movies.at(-4));
console.log(movies.at(-2));
console.log(movies.at(0));

movies[4]='demon slayer';

console.log(movies);

//slicing
console.log(movies.slice(1,4));
console.log(movies.slice(1,-1));
console.log(movies.slice(2));//print after index 1 to all
console.log(movies.slice(2 ,100));

//adding elements in array at start nd end
movies.push('flash');
movies.unshift('pathaan');

console.log(movies);

//removing element from array
movies.pop();//delete from end
movies.shift();//delete from start
console.log(movies);

//delete from any position

movies.splice(3,2);//(index,no. og element remove)

console.log(movies);

console.log(['iron man',...movies ,'batman']);
console.log( [...movies.slice(0, 3),'new element',...movies.slice(3)] );

//array traversal
