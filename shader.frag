#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform float freq;
uniform float amp;
varying vec2 vTexCoord;

void main() {
    vec2 uv = gl_FragCoord.xy / vec2(800.0, 600.0); // 画面サイズを正規化
    float wave = sin(uv.x * freq * 10.0 + time) * amp;
    vec3 color = vec3(abs(wave), 0.2, 0.5 + wave * 0.5);
    gl_FragColor = vec4(color, 1.0);
}
