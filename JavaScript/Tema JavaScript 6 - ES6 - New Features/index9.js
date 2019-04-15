/*1.Write a function, gooseFilter/goose_filter/GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.*/

const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

const notGoose = bird =>
  !geese.includes(bird)

const gooseFilter = birds =>
  birds.filter(notGoose)



/* 2. Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
20_year_estimate = one_year_total * 20
You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Your function should return the 20 year estimate of the stairs climbed using the formula above.*/

const stairsIn20 = s => {
  return s.reduce((sum, item) => {
    return sum += item.reduce((sum, item) => {
      return sum += item;
    }, 0);
  }, 0) * 20;
};



/* 3. Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4 */

const points=games=>games.reduce((output,current)=> {

    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
    
  },0)




/* 4. Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.*/

const howMuchILoveYou = petalCount => [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',][petalCount % 6 === 0 ? 5 : petalCount % 6 - 1]


//  5. Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.


const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);