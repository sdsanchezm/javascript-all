class Car {
    constructor(license, driver){
        this.id,
        this.license = license,
        this.driver = driver,
        this.passenger
    }

    printDataCar(){
        console.log("Driver name: ", this.driver.name);
        console.log("Driver Document", this.driver.document);
        console.log("Lic: ", this.license);
    }
}