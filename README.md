# Classroom Phaser

Classroom developed in JavaScript using Phaser.

![alt screenshot](https://raw.githubusercontent.com/lrusso/ClassroomPhaser/main/ClassroomPhaser.png)


## Web

https://lrusso.github.io/ClassroomPhaser/ClassroomPhaser.htm

## How does it work?

Open the **ClassroomPhaserBoard.htm** file and you will find a similar script:

```javascript
STRING_COURSE = "HTML & CSS Course";
STRING_CLASS1 = "Class 1 - Introduction";
STRING_CLASS1_CONTENT = [
                            [
                            "black","My black color Title in the first slide",
                            "blue","My blue color Text in the first slide explaining something.",
                            "https://www.example.com/image1.jpg",
                            "https://www.example.com/audio1.mp3",
                            ],
                            [
                            "green","My green color Title in the second slide",
                            "red","My red color Text in the second slide explaining something.",
                            "https://www.example.com/image2.jpg",
                            "https://www.example.com/audio2.mp3",
                            ],
                            [
                            "purple","My purple color Title in the third slide",
                            "black", null,
                            "https://www.example.com/image3.jpg",
                            "https://www.example.com/audio3.mp3",
                            ],
                        ];
STRING_CLASS2 = "Class 2 - HTML Objects";
STRING_CLASS3 = "Class 3 - CSS Implementation";
STRING_CLASS4 = "Class 4 - W3C Code Validation";
STRING_CLASS5 = "Class 5 - Handling file uploads";
STRING_TIP = "Click in a class title to begin";
STRING_ABOUT = "Designed by www.lrusso.com";
```

## Things to know

* Every slide is an array within the class array.

* Every slide can have an optional text, image and audio content.

* If the slide has an image but no text, the image will be centered vertically.

* If the slide has an audio, it will show to the next slide (if any) or go back to the board.

* At the moment, Classroom Phaser allows courses with up to 5 classes.
