class Person {
    constructor(name) {
        this.name = name;
        this.count = 0;
    }

    limit() {
        return 0;
    }

    issue() {
        if (this.count < this.limit()) {
            this.count++;
            return "Book issued";
        }
        return "Limit reached";
    }
}

class Student extends Person {
    limit() {
        return 2;
    }
}

class Faculty extends Person {
    limit() {
        return 5;
    }
}

let current = null;

function makeUser() {
    let name = document.getElementById("userName").value;
    let type = document.getElementById("userType").value;

    if (type === "student") {
        current = new Student(name);
    } else {
        current = new Faculty(name);
    }

    show("");
}

function takeBook() {
    if (!current) return;
    let msg = current.issue();
    show(msg);
}

function show(msg) {
    document.getElementById("screen").innerText =
        "Name: " + current.name +
        "\nBooks: " + current.count +
        "\n" + msg;
}