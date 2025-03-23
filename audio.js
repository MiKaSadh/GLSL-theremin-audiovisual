class Theremin {
    constructor() {
        this.osc = new p5.Oscillator('sine');
        this.osc.amp(0);
        this.osc.start();
        this.freq = 440;
        this.amp = 0;
    }

    getFrequency() {
        this.freq = map(mouseX, 0, width, 100, 1000);  // マウスのX座標で周波数
        this.osc.freq(this.freq);
        return this.freq / 1000.0;  // シェーダーに渡しやすいスケール
    }

    getAmplitude() {
        this.amp = map(mouseY, 0, height, 1, 0);  // マウスのY座標で音量
        this.osc.amp(this.amp);
        return this.amp;
    }
}
