/* sparkle.js - 복사해서 저장하세요 */

// 클릭했을 때
document.addEventListener('click', function(e) {
    createSparkles(e.clientX, e.clientY);
});

// 터치했을 때 (모바일)
document.addEventListener('touchstart', function(e) {
    // 터치가 발생한 모든 지점에서 반짝임
    for (let i = 0; i < e.touches.length; i++) {
        createSparkles(e.touches[i].clientX, e.touches[i].clientY);
    }
});

function createSparkles(x, y) {
    // 색상 배열 (원하는 색 추가 가능)
    const colors = ['#FFFFFF'];
    const particleCount = 15; // 반짝이 개수

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 2 + 5; // 크기 랜덤

        // 스타일 설정
        p.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 999999; /* 무조건 맨 위에 */
            box-shadow: 0 0 10px ${color};
            transform: translate(-50%, -50%); /* 손가락 중앙에 오게 */
        `;

        // 움직임 랜덤 계산
        const destX = (Math.random() - 0.5) * 200;
        const destY = (Math.random() - 0.5) * 200;
        const rot = Math.random() * 520;

        document.body.appendChild(p);

        // 애니메이션
        const animation = p.animate([
            { transform: `translate(-50%, -50%) scale(1)`, opacity: 1 },
            { transform: `translate(${destX}px, ${destY}px) rotate(${rot}deg) scale(0)`, opacity: 0 }
        ], {
            duration: 500 + Math.random() * 500,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        });

        // 애니메이션 끝나면 삭제
        animation.onfinish = () => p.remove();
    }
}