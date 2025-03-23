class Theremin {
    constructor() {
        this.baseKey = 'C';
        this.oscillators = [];
        for (let i = 0; i < 5; i++) {
            let osc = new p5.Oscillator('sine');
            osc.amp(0);
            osc.start();
            this.oscillators.push(osc);
        }
    }

    setKey(key) {
        this.baseKey = key.toUpperCase();
    }

    getScaleNotes() {
        const scales = {
            'C': [0, 2, 4, 5, 7, 9, 11],
            'D': [2, 4, 6, 7, 9, 11, 13],
            'E': [4, 6, 8, 9, 11, 13, 15],
            // 他のキーも追加可能
        };
        return scales[this.baseKey] || scales['C'];
    }

    getFrequency() {
        const notes = this.getScaleNotes();
        const baseFreq = 261.63; // C4
        let scaleIndex = floor(map(mouseX, 0, width, 0, notes.length));
        scaleIndex = constrain(scaleIndex, 0, notes.length - 1);

        const rootNote = notes[scaleIndex];

        // 和音構成（例：ルート + 長3度 + 完全5度 + 長6度 + 長7度）
        const intervals = [0, 4, 7, 9, 11];
        let freqs = intervals.map(i => baseFreq * pow(2, (rootNote + i) / 12));

        // 音量をマウスYで調整
        let amp = map(mouseY, 0, height, 1, 0);

        // 周波数と音量を適用
        for (let i = 0; i < this.oscillators.length; i++) {
            this.oscillators[i].freq(freqs[i % freqs.length]);
            this.oscillators[i].amp(amp);
        }

        return freqs[0] / 1000.0; // シェーダーに渡す用
    }

    getAmplitude() {
        return map(mouseY, 0, height, 1, 0);
    }
}
