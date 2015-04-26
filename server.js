var express = require('express');
var path = require('path');
var app = express();

/* if you use cors, then there is no need to explicitly set headers 
to allow cross origin requests */

var cors = require('cors');

app.use(express.static(path.join(__dirname, '/static')));
app.use(cors());


function send_chart_json_data(request, response) {
  console.log ("in send_chart_json_data function");
  var chart_data = [
['calories',12],
['total_fat',5],
['saturated_fat',18],
['cholesterol',13],
['sodium',7],
['carbohydrate',4],
['dietary_fiber',9],
['sugars',10],
['protien',15],
['iron',22]
];
  response.type('application/json');
  response.setHeader('Content-Type', 'application/json');
  response.send(chart_data);
  
}


function send_word_tree_json(request, response) {
  console.log ("in send_word_tree_json function");
  var tree_data = {
 "old_api_id": null,
 "item_id": "51c54b0c97c3e6efadd60b21",
 "item_name": "Potato Chips, Wavy Lightly Salted",
 "leg_loc_id": null,
 "brand_id": "51db37cb176fe9790a89992a",
 "brand_name": "Lay's",
 "item_description": "Wavy Lightly Salted",
 "updated_at": "2014-11-24T20:24:24.000Z",
 "nf_ingredient_statement": "Potatoes, Vegetable Oil (Sunflower, Corn And/Or Canola Oil) And Salt.",
 "nutrient_info" : {
 "nf_water_grams": null,
 "nf_calories": 160,
 "nf_calories_from_fat": 90,
 "nf_total_fat": 10,
 "nf_saturated_fat": 1,
 "nf_trans_fatty_acid": 0,
 "nf_polyunsaturated_fat": null,
 "nf_monounsaturated_fat": null,
 "nf_cholesterol": 0,
 "nf_sodium": 70,
 "nf_total_carbohydrate": 15,
 "nf_dietary_fiber": 1,
 "nf_sugars": 0,
 "nf_protein": 2,
 "nf_vitamin_a_dv": 0,
 "nf_vitamin_c_dv": 10,
 "nf_calcium_dv": 0,
 "nf_iron_dv": 2
 },
 
 "nf_refuse_pct": null,
 "nf_servings_per_container": 10,
 "nf_serving_size_qty": 28,
 "nf_serving_size_unit": "G",
 "nf_serving_weight_grams": 28,
 "allergen_contains_milk": null,
 "allergen_contains_eggs": null,
 "allergen_contains_fish": null,
 "allergen_contains_shellfish": null,
 "allergen_contains_tree_nuts": null,
 "allergen_contains_peanuts": null,
 "allergen_contains_wheat": null,
 "allergen_contains_soybeans": null,
 "allergen_contains_gluten": null,
 "usda_fields": null
};
  
response.type('application/json');
response.setHeader('Content-Type', 'application/json');
response.send(tree_data);
  
}


app.get("/chart_data", send_chart_json_data);
app.get("/tree_data",send_word_tree_json);  // defining data as the get endpoint instead of root





app.listen(8008);
console.log("listening on port 8008");

