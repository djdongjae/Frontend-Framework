let rectangle1 = {
    width: 4,
    height: 5,
    method1() {
        let getArea = function() {
            return this.width * this.height;
        };
        let getArea2 = getArea.bind(rectangle1);
        console.log(getArea2());
    }
};

rectangle1.method1();