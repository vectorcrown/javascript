import { largestAdjacentNumber } from '../Problem8'

const grid1 = `73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
38991007832084782777189757278819047278899274961949
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
82834772897718748193457134085784719857638187485919
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
83247832478757285710958372981577583275832789327921
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
84327878357761783787589375857378271083787811983779
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
82347875831098357801578571807585817518287829189189`

const grid2 = `73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450`

const grid3 = `89125732138957892357892768971807934878999818278898
48327483578957875827583295789187588875238579887789
74358275778171870973857835738758275210873583758279
81347834738473878758758373857893758787772897580719
81232847857895758758987587501087575387538183787098
17047878395783578750837100983787587582797837508298
42894789325732857893759187987487489748377578791989
82147328972387832578327581919827382758932789798289
83243289473847328974832947832748932472387895738978
84738294738973289578753287582375238957573297892398
29383748329748397483274832748327477575018978975289
48327483758375846372864736476478364783647463278787
73281473847832974328758975890189373857875875895898
74328978748329789357389578329758329758937893758979
81738957389579287598217589127589375893275987359889
71890743894732897510875895783297591085738975837897
10783974839479879857895789758975981735870175835789
01494787857897583758975849758475107589754897589789
09939858758919788017587897587387585775289757982898
74718478978758758975897589789789798789178957789789`

const grid4 = `99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999`

describe('checkLargestAdjacentNumberProduct', () => {
  it('Random Example', () => {
    const RESULT = largestAdjacentNumber(grid1, 13)
    expect(RESULT).toBe(23514624000)
  })
  it('Problem statement Example', () => {
    const RESULT = largestAdjacentNumber(grid2, 13)
    expect(RESULT).toBe(23514624000)
  })
  it('Random Example 2', () => {
    const RESULT = largestAdjacentNumber(grid3, 13)
    expect(RESULT).toBe(580717154304)
  })
  it('Example with all 9', () => {
    const RESULT = largestAdjacentNumber(grid4, 13)
    expect(RESULT).toBe(2541865828329)
  })
})
