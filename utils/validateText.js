// Validation helper
export function validateText(text) {
  // Type check
  if (typeof text !== 'string') {
    return { valid: false, error: 'Văn bản giấc mơ phải là một chuỗi ký tự.' };
  }

  // Sanitization: trim whitespace
  const trimmed = text.trim();

  // Required field check
  if (trimmed.length === 0) {
    return { valid: false, error: 'Văn bản giấc mơ là bắt buộc.' };
  }

  // Length limit check
  if (trimmed.length > 5000) {
    return { valid: false, error: 'Văn bản giấc mơ phải ít hơn 5000 ký tự.' };
  }

  return { valid: true, value: trimmed };
}