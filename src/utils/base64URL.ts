// Mã hóa Base64 URL
export const base64URLEncode = (str: string) => {
	// Trên URL, các ký tự +, /, = được xem là không an toàn. Nên cần thay thế chúng với các ký tự an toàn hơn, cụ thể:
	// + => -
	// / => _
	// = => ''

	return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

// Giải mã Base64 URL
export const base64URLDecode = (base64Url: string) => {
	base64Url = base64Url.replace(/-/g, '+').replace(/_/g, '/');

	// Trong chuẩn mã hóa Base64, độ dài của chuỗi đầu ra phải là bội số của 4. Để đảm bảo điều này, ký tự = được thêm vào cuối chuỗi mã hóa để bổ sung độ dài cần thiết, đây gọi là "padding".
	while (base64Url.length % 4) {
		base64Url += '=';
	}

	return atob(base64Url);
};
