function euler (x, y, dx, f, steps, precision = 3) {
    let yn = y
    let xn = x
	let ans = {}
    x += dx
    for (let i = 0; i < steps; i++) {
        y = yn + f(xn, yn) * dx
		ans[x.toFixed(precision)] = {
			y: y.toFixed(precision),
			f: f(x, y).toFixed(precision)
		}
        xn = x
        x += dx
        yn = y
    }
	return ans
}

euler(0, 0, .5, (x, y) => {
    return ((3 - y) * (y + 1))
}, 10)
