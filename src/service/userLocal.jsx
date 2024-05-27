export const userLocal = {
	//input item to local storage
	setInfor: (inforUser) => {
		let json = JSON.stringify(inforUser)
		localStorage.setItem('inforUser', json)
	},
	setId: (inforUser) => {
		let json = JSON.stringify(inforUser)
		localStorage.setItem('userId', json)
	},
	setRoleName: (data) => {
		let inforUser
		if (data == 1) inforUser = 'admin'
		else inforUser = 'customer'
		let json = JSON.stringify(inforUser)
		localStorage.setItem('userRole', json)
	},
	setDetail: (data) => {
		let json = JSON.stringify(data)
		localStorage.setItem('detail', json)
	},

	//get information from local storage
	getInfor: () => {
		let json = localStorage.getItem('inforUser')
		if (json) {
			return JSON.parse(json)
		} else {
			return null
		}
	},
	getRoleName: () => {
		let json = localStorage.getItem('userRole')
		if (json) {
			return JSON.parse(json)
		} else {
			return null
		}
	},
	getUserId: () => {
		let json = localStorage.getItem('userId')
		if (json) {
			return JSON.parse(json)
		} else {
			return null
		}
	},

	//delete item in local storage
	delete: () => {
		// localStorage.removeItem('inforUser')
		localStorage.removeItem('userRole')
		localStorage.removeItem('userId')
	},
}
