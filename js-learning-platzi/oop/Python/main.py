from car import Car

if __name__ == "__main__":
    print("Hola Mundo")
    car = Car()
    car.license = "!@#ZXC"
    car.driver = "Kroken"
    car.passenger = 3
    print(vars(car))