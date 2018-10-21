function sameSign(a, b) {
    return (a ^ b) >= 0
}

function vector(a, b) {
    return {
        x: b.x - a.x,
        y: b.y - a.x
    }
}

function vectorProduct(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y
}

function isPointInTrangle(p, a, b, c) {
    var pa = vector(p, a),
        pb = vector(p, b),
        pc = vector(p, c),
        t1 = vectorProduct(pa, pb),
        t2 = vectorProduct(pb, pc),
        t3 = vectorProduct(pc, pa);

        return sameSign(t1, t2) && sameSign(t2, t3) && sameSign(t1, t3)
}

function needDelay(elem, leftCorner, currMousePos) {
    var offset = elem.offset();
    var topLeft = {
        x: offset.left,
        y: offset.top
    };
    var bottomLeft = {
        x: offset.left,
        y: offset.top + elem.height()
    };

    return isPointInTrangle(currMousePos, leftCorner, topLeft, bottomLeft);
}