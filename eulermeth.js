function euler (x, y, dx, f, steps) {
    let yn = y
    let xn = x
	let ans = {}
    x += dx
    for (let i = 0; i < steps; i++) {
        y = yn + f(xn, yn) * dx
		ans[x.toFixed(3)] = {
			y: y.toFixed(3),
			f: f(x, y).toFixed(3)
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