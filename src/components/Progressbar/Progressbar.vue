<template>
  <div>
    <div class="progressbar-container">
      <div class="bar" :style="{width : handleProgress()}"></div>
      <span class="content">{{ handleProgress() }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 100,
    },
    partialValue: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    handleProgress() {
      let partialValue = this.partialValue ;
      let totalValue = this.max ;
      let sum = Math.floor((partialValue / totalValue) * 100 )

      return  `${sum}%`;
    },
  },
};
</script>

<style lang="scss">
.progressbar-container {
  border-radius: 1rem;
  background-color: #222;
  border: 1px solid black;
  width: 100%;
  height: 1.5rem;
  position: relative;
  overflow: hidden;
  .bar {
    height: 100%;
    background-color: rgb(0, 255, 85);
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1000' height='30' preserveAspectRatio='none' viewBox='0 0 1000 30'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1170%26quot%3b)' fill='none'%3e%3crect width='1000' height='30' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M -144.38249169301292%2c3 C -126.18%2c7.8 -89.78%2c25 -53.38249169301293%2c27 C -16.98%2c29 1.22%2c14.4 37.61750830698707%2c13 C 74.02%2c11.6 92.22%2c19.8 128.61750830698708%2c20 C 165.02%2c20.2 183.22%2c14.8 219.61750830698708%2c14 C 256.02%2c13.2 274.22%2c16.6 310.6175083069871%2c16 C 347.02%2c15.4 365.22%2c9.6 401.6175083069871%2c11 C 438.02%2c12.4 456.22%2c22.4 492.6175083069871%2c23 C 529.02%2c23.6 547.22%2c15.2 583.617508306987%2c14 C 620.02%2c12.8 638.22%2c18 674.617508306987%2c17 C 711.02%2c16 729.22%2c8.4 765.617508306987%2c9 C 802.02%2c9.6 820.22%2c20.2 856.617508306987%2c20 C 893.02%2c19.8 918.94%2c6.8 947.617508306987%2c8 C 976.29%2c9.2 989.52%2c22.4 1000%2c26' stroke='rgba(0%2c 185%2c 245%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -129.55956495910888%2c9 C -111.36%2c11 -74.96%2c18 -38.55956495910888%2c19 C -2.16%2c20 16.04%2c13.8 52.44043504089112%2c14 C 88.84%2c14.2 107.04%2c20.8 143.44043504089112%2c20 C 179.84%2c19.2 198.04%2c8.8 234.44043504089112%2c10 C 270.84%2c11.2 289.04%2c27.2 325.4404350408911%2c26 C 361.84%2c24.8 380.04%2c3.8 416.4404350408911%2c4 C 452.84%2c4.2 471.04%2c26.4 507.4404350408911%2c27 C 543.84%2c27.6 562.04%2c8 598.4404350408911%2c7 C 634.84%2c6 653.04%2c22.4 689.4404350408911%2c22 C 725.84%2c21.6 744.04%2c4.2 780.4404350408911%2c5 C 816.84%2c5.8 835.04%2c25.2 871.4404350408911%2c26 C 907.84%2c26.8 936.73%2c9.8 962.4404350408911%2c9 C 988.15%2c8.2 992.49%2c19.4 1000%2c22' stroke='rgba(0%2c 185%2c 245%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1170'%3e%3crect width='1000' height='30' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-size:  cover;
 transition: width 2s ease;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    z-index: 100;
    font-weight: 700;
  }
}
</style>
