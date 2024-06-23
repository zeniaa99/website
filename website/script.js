// script.js
function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
}
document.addEventListener('DOMContentLoaded', () => {
    let orderCounter = 0; // ตัวแปรเก็บค่าเลขออร์เดอร์

    const form = document.querySelector('form');
    const orderNumberInput = document.getElementById('order-number');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // หยุดการส่งฟอร์มเพื่อป้องกันการรีโหลดหน้า

        // เพิ่มเลขออร์เดอร์ล่าสุดและเพิ่มขึ้นไปทุกครั้งที่มีการส่งฟอร์ม
        orderCounter++;
        const orderNumber = `ORD-${orderCounter}`;

        // ตั้งค่าค่าเลขออร์เดอร์ในฟิลด์ input
        orderNumberInput.value = orderNumber;

        // แสดงเลขออร์เดอร์ให้กับผู้ใช้
        alert(`เลขออร์เดอร์ของคุณคือ: ${orderNumber}. กรุณาเก็บเลขออร์เดอร์นี้ไว้เพื่อยืนยันในไลน์`);

        // ส่งฟอร์ม
        form.submit();
    });
});
