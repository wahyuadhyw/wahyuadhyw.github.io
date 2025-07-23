function encodeBase64() {
  const input = document.getElementById("inputText").value;
  try {
    const encoded = btoa(unescape(encodeURIComponent(input)));
    document.getElementById("outputText").value = encoded;
  } catch (err) {
    alert("❌ Gagal encode: periksa input Anda.");
  }
}

function decodeBase64() {
  const input = document.getElementById("inputText").value;
  try {
    const decoded = decodeURIComponent(escape(atob(input)));
    document.getElementById("outputText").value = decoded;
  } catch (err) {
    alert("❌ Gagal decode: pastikan input adalah Base64 valid.");
  }
}

function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}

function copyOutput() {
  const output = document.getElementById("outputText");
  output.select();
  document.execCommand("copy");
  alert("✅ Teks disalin!");
}
