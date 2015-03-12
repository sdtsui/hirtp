// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 
 Test.assertEquals(deepCompare({name: 'Joe'}, {name: 'Joe'}), true);
 Test.assertEquals(deepCompare({t:true},{t:false}), false)
 Test.assertEquals(deepCompare({},{}), true)
 Test.assertEquals(deepCompare({ abc: 'abc', adf: 5, t: true},{ abc: 'abc', adf: 5, t: true}), true) 
 Test.assertNotEquals(deepCompare("5", 5), true) 
