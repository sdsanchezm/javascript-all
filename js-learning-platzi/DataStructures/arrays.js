class MyArray{
	constructor(){
		this.length = 0;
		this.data = {}
	}
	get(index){
		return this.data[index];
	}
	push(item){
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}
	pop(){
		const removedItem = this.data[this.length - 1]
		delete this.data[this.length - 1]
		this.length--;
		return removedItem;
	}
	delete(index){
		const deletedItem = this.data[index];
		this.shiftIndex(index);
		return deletedItem;
	}
	shiftIndex(index){
		for(let i = index; i < this.length; i++){
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
	shift(){
		const deletedItem = this.data[0];
		delete(0);
		return deletedItem;
	}
	unshift(item){
		this.length++;
		for(let i = 0; i < this.length; i++){
			this.data[i] = this.data[i + 1];
		}
		this.data[0] = item;
		return this.data;
	}

}


const myArray1 = new MyArray();

myArray1.push("kraus");
console.log(myArray1);
myArray1.push("pollo");
console.log(myArray1);
myArray1.push("cangrejo");
myArray1.push("pulpo");
console.log(myArray1);
myArray1.pop();
console.log(myArray1);
console.log(myArray1.get(1));
//myArray1.delete(1);
console.log(myArray1);
myArray1.shift();
console.log(myArray1);