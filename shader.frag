#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform float freq;
uniform float amp;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    float brightness = sin(uv.x * freq * 10.0 + time) * amp;
    vec3 color = vec3(0.5 + brightness, 0.2, 0.8 - brightness);
    gl_FragColor = vec4(color, 1.0);
}
