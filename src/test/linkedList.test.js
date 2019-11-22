describe('Singly Linked List', function () {

    it('test Node', function () {
        var first = new LinkNode("Test")
        first.next = new LinkNode("success")
        expect(first.next.val).toEqual("success");
    });

    it('test push', function () {
        var list = new SinglyLinkedList();
        list.pushList('test');
        list.pushList('succesfully');
        list.pushList('completed');
        expect(list.head.val).toEqual("test");
        expect(list.tail.val).toEqual("completed");
        expect(list.length).toEqual(3);
    });

    it('test pop', function () {
        var list = new SinglyLinkedList();
        list.pushList('test');
        list.pushList('succesfully');
        list.pushList('completed');
        list.popList();
        expect(list.head.val).toEqual("test");
        expect(list.tail.val).toEqual("succesfully");
        expect(list.length).toEqual(2);
    });



});