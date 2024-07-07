class Circle {
      constructor(radius = 1.0, color = "red") {
        this.radius = parseFloat(radius);
        this.color = color;
      }
      getRadius() {
        return this.radius;
      }
      setRadius(radius) {
        this.radius = radius;
      }
      getColor() {
        return this.color;
      }
      setColor(color) {
        this.color = color;
      }
      toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
      }
      getArea() {
        let area = 3.14159 * Math.pow(this.radius, 2);
        return area.toFixed(2);
      }
      getCircumference() {
        let circumference = 2 * 3.14159 * this.radius;
        return circumference.toFixed(2);
      }
    }
    
    let circle = new Circle(2, "blue");
    console.log(circle);
    
    console.log(circle.getRadius());
    console.log(circle.getColor());
    console.log(circle.getArea());
    console.log(circle.getCircumference());
    console.log(circle.toString());
    
    circle.setRadius(2);
    
    console.log(circle.getArea());
    console.log(circle.getCircumference());
    circle.setColor("green");
    console.log(circle.getColor());
    console.log(circle);