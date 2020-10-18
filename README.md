# Classroom Phaser

Classroom developed in JavaScript using Phaser.

![alt screenshot](https://raw.githubusercontent.com/lrusso/ClassroomPhaser/main/ClassroomPhaser.png)


## Web

https://lrusso.github.io/ClassroomPhaser/ClassroomPhaser.htm

## How does it work?

Open the **ClassroomPhaserDefault.json** and you will find a similar structure:

```javascript
{
   "STRING_COURSE": "HTML & CSS Course",
   "STRING_CLASS1": "Class 1 - Introduction",
   "STRING_CLASS1_CONTENT": [
                            [
                            "#000000", "My black color Title in the first slide",
                            "#0000FF", "My blue color Text in the first slide explaining something.",
                            "https://www.example.com/image1.jpg",
                            null,
                            null,
                            "https://www.example.com/audio1.mp3"
                            ],
                            [
                            "#008000", "My green color Title in the second slide",
                            "#FF0000", "My red color Text in the second slide explaining something.",
                            "https://www.example.com/image2.jpg",
                            null,
                            null,
                            "https://www.example.com/audio2.mp3"
                            ],
                            [
                            "#800080", "My purple color Title in the third slide",
                            "#000000", null,
                            "https://www.example.com/image3_first.jpg",
                            "https://www.example.com/image3_second.jpg",
                            3000,
                            "https://www.example.com/audio3.mp3",
                            ]
                          ],
   "STRING_CLASS2": "Class 2 - HTML Objects",
   "STRING_CLASS2_CONTENT": [],
   "STRING_CLASS3": "Class 3 - CSS Implementation",
   "STRING_CLASS3_CONTENT": [],
   "STRING_CLASS4": "Class 4 - W3C Code Validation",
   "STRING_CLASS4_CONTENT": [],
   "STRING_CLASS5": null,
   "STRING_CLASS5_CONTENT": [],
   "STRING_TIP": "Click in a class title to begin",
   "STRING_ABOUT": "Designed by www.lrusso.com"
}
```

## Things to know

* A null class title will not be displayed.

* Every slide is an array within an array in the class content key.

* Every slide can have an optional text, image and audio content.

* If the slide has an image but no text, the image will be centered vertically.

* After playing an audio (if any), it will go to the next slide (if any) or back to the board.

* In the example above, the third slide has a second image and a delay to show it.

* At the moment, Classroom Phaser allows courses with up to 5 classes.

## Using different courses

| BROWSING TO  | READS THE COURSE DATA FROM |
| :------------ |:---------------:|
| ClassroomPhaser.htm | ClassroomPhaserDefault.json |
| ClassroomPhaser.htm?course=example | example.json |
