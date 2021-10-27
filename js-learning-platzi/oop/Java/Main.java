class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");

        Car car = new Car("!@#QWE", new Account("Ceferino", "DOC0321"));
        car.passenger = 2;
        car.printDataCar();
    }
}