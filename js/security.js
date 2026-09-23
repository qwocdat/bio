export const Security = {
    // Escape HTML để tránh XSS
    sanitizeHTML(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },

    // Kiểm tra và bảo mật URL
    sanitizeURL(url) {
        if (!url) return '#';
        const trimmed = String(url).trim();
        // Chỉ chấp nhận HTTP, HTTPS và Mailto
        if (/^(https?:\/\/|mailto:)/i.test(trimmed)) {
            return encodeURI(trimmed);
        }
        return '#';
    },

    // Kiểm tra Username hợp lệ
    validateUsername(username) {
        const reserved = ['admin', 'api', 'login', 'register', 'dashboard', 'settings', 'support', 'help', 'pricing', 'privacy', 'terms', 'about', 'assets', 'static'];
        const regex = /^[a-z0-9_-]{3,30}$/;
        
        const normalized = String(username).toLowerCase().trim();
        if (!regex.test(normalized)) {
            return { valid: false, error: 'Username từ 3-30 ký tự, chỉ gồm chữ thường, số, _ và -' };
        }
        if (reserved.includes(normalized)) {
            return { valid: false, error: 'Username này nằm trong danh sách hệ thống bảo lưu.' };
        }
        return { valid: true, username: normalized };
    }
};
