class student {
    constructor(name,year) {
        
        this.name=name;
        this.year=year;

    }

    //creating age method for class student

    age(){
        let date=new Date();
        return date.getFullYear() - this.year; //2025 - 2020 = 11

    }
}


      //use student class with two objects

      student1=new student ("Riya",2014 );

      document.getElementById(student1).innerHTML=
      "My name is" + student1.name + ".I born in" + student1.year + ".And my age is" + student1.age ();

      student2=new student ("Tina", 2018 );

      document.getElementById(student1).innerHTML=
      "My name is" + student2.name + ".I born in" + student2.year + ".And my age is" + student2.age();

      