class UberPrice {
      constructor(pickupPlace, dropingPlace, distance, trip) {
        this.pickupPlace = pickupPlace;
        this.dropingPlace = dropingPlace;
        this.distance = distance;
        this.trip = () => {
          if (trip == "One way") {
            return 1;
          } else return 2;
        };
      }
      getPrice() {
        const price = this.distance * 50 * this.trip();
        return price;
      }
      displayDetails() {
        console.log(`
        Pickup Place: ${this.pickupPlace}
        Droping Place: ${this.dropingPlace}
        Distance: ${this.distance}
        trip: ${this.trip() == 1 ? "One way" : "Roundtrip"}
        Trip Price: ${this.getPrice()}`);
      }
    }
    
    const uberPrice = new UberPrice("OMR", "vandalur", 20, "One way");
    uberPrice.displayDetails();