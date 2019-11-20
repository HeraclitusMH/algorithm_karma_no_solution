describe('PayEver test || smallest number in array N(max=100000) of x elements (x from -1000000 to +1000000)', function () {

    it('mergesort', function () {
        const arr = [6,3,-1,-7,-9,10,2];
        expect(mergeSort(arr)).toEqual([-9,-7,-1,2,3,6,10]);
    });

    it('binarySearch', function () {
        const arr = [-9,-7,-1,2,3,6,10]
        expect(binarySearch(arr,1)).toEqual(-1);
    });

    it('integration merge and binary', function () {
        const arr = [6,3,-1,-7,-9,10,2];
        let x = mergeSort(arr);
        expect(binarySearch(x,2)).toEqual(3);
    });

   /* it('solution', function () {
        const arr = [6,3,-1,-7,-9,10,2];
        expect(solution(arr)).toEqual(2);
    }); */

});