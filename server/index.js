import express from 'express'
import cors from 'cors'
const app = express();
const port = process.env.PORT || 5000; 
app.use(cors());


const data = {
    
        "labels": [
          {
            "id": "sandwitch",
            "label": "Sandwitch"
          },
          {
            "id": "paneer",
            "label": "Paneer"
          },
          {
            "id": "salad",
            "label": "Salad"
          },
          {
            "id": "samosa",
            "label": "Samosa"
          },
          {
            "id": "dal",
            "label": "Dal"
          },
          {
            "id": "chat",
            "label": "Chat"
          },
          {
            "id": "vegetarian",
            "label": "Vegetarian"
          },
          {
            "id": "breakfast",
            "label": "Breakfast"
          }
        ],
        "meals": [
          {
            "id": "meal1",
            "title": "3 course Veg Sandwitch",
            "starter": "Lorem Ipsum",
            "desert": "Cake",
            "price": 9.99,
            "labels": [
              "sandwitch",
              "breakfast"
            ],
            "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg",
            "drinks": [
              {
                "id": "drink-1",
                "title": "Vine",
                "price": 4.99
              },
              {
                "id": "drink-2",
                "title": "Juice",
                "price": 5.99
              },
              {
                "id": "drink-3",
                "title": "Beer",
                "price": 6.99
              }
            ]
          },
          {
            "id": "meal2",
            "title": "3 course Paneer",
            "starter": "Lorem Ipsum",
            "desert": "Cake",
            "price": 19.99,
            "labels": [
              "paneer"
            ],
            "img": "https://recipesaresimple.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg",
            "drinks": [
              {
                "id": "drink-1",
                "title": "Vine",
                "price": 4.99
              },
              {
                "id": "drink-2",
                "title": "Juice",
                "price": 5.99
              },
              {
                "id": "drink-3",
                "title": "Beer",
                "price": 6.99
              }
            ]
          },
          {
            "id": "meal3",
            "title": "3 course Vegetarian",
            "starter": "Lorem Ipsum",
            "desert": "Cake",
            "price": 79.99,
            "labels": [
              "vegetarian"
            ],
            "img": "https://source.unsplash.com/EvoIiaIVRzU",
            "drinks": [
              {
                "id": "drink-1",
                "title": "Vine",
                "price": 4.99
              },
              {
                "id": "drink-2",
                "title": "Juice",
                "price": 5.99
              },
              {
                "id": "drink-3",
                "title": "Beer",
                "price": 6.99
              }
            ]
          },
          {
            "id": "meal4",
            "title": "3 course Veg Salad",
            "starter": "Lorem Ipsum",
            "desert": "Cake",
            "price": 49.99,
            "labels": [
              "salad"
            ],
            "img": "https://www.shelikesfood.com/wp-content/uploads/2022/06/nRainbow-Veggie-Salad-9925.jpg",
            "drinks": [
              {
                "id": "drink-1",
                "title": "Vine",
                "price": 4.99
              },
              {
                "id": "drink-2",
                "title": "Juice",
                "price": 5.99
              },
              {
                "id": "drink-3",
                "title": "Beer",
                "price": 6.99
              }
            ]
          },
          {
            "id": "meal5",
            "title": "3 course Dal",
            "starter": "Lorem Ipsum",
            "desert": "Cake",
            "price": 39.99,
            "labels": [
              "dal"
            ],
            "img": "https://www.thecuriouschickpea.com/wp-content/uploads/2019/04/masoor-tadka-dal-3.jpg",
            "drinks": [
              {
                "id": "drink-1",
                "title": "Vine",
                "price": 4.99
              },
              {
                "id": "drink-2",
                "title": "Juice",
                "price": 5.99
              },
              {
                "id": "drink-3",
                "title": "Beer",
                "price": 6.99
              }
            ]
          },
          {
            "id": "meal6",
            "title": "3 course Chat",
            "starter": "Lorem Ipsum",
            "desert": "Cake",
            "price": 29.99,
            "labels": [
              "chat",
              "breakfast"
            ],
            "img": "https://masalaandchai.com/wp-content/uploads/2021/10/Samosa-Chaat-with-Chai.jpg",
            "drinks": [
              {
                "id": "drink-1",
                "title": "Vine",
                "price": 4.99
              },
              {
                "id": "drink-2",
                "title": "Juice",
                "price": 5.99
              },
              {
                "id": "drink-3",
                "title": "Beer",
                "price": 6.99
              }
            ]
          },
          {
            "id": "meal7",
            "title": "3 course Samosa",
            "starter": "Lorem Ipsum",
            "desert": "Cake",
            "price": 19.99,
            "labels": [
              "samosa"
            ],
            "img": "https://myfoodstory.com/wp-content/uploads/2021/08/Punjabi-Samosa-4.jpg",
            "drinks": [
              {
                "id": "drink-1",
                "title": "Vine",
                "price": 4.99
              },
              {
                "id": "drink-2",
                "title": "Juice",
                "price": 5.99
              },
              {
                "id": "drink-3",
                "title": "Beer",
                "price": 6.99
              }
            ]
          }
        ]
      }



      app.get('/api/labels', (req, res) => {
        res.json(data.labels);
      });
      
      app.get('/api/meals', (req, res) => {
        res.json(data.meals);
      });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
