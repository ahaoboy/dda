<template>
  <div class="main">
    <div class="points">
      <div class="point">
        <h2>起点</h2>
        <InputNumber :max="50" :min="-50" v-model="x1"></InputNumber>
        <InputNumber :max="50" :min="-50" v-model="y1"></InputNumber>
      </div>
      <div class="point">
        <h2>终点</h2>
        <InputNumber :max="50" :min="-50" v-model="x2"></InputNumber>
        <InputNumber :max="50" :min="-50" v-model="y2"></InputNumber>
      </div>
      <Button type="primary" @click="draw">绘制</Button>
      <Button type="primary" @click="reset">重置</Button>
      <Button type="primary" @click="isShow=!isShow">查看</Button>

    </div>
    <div class="grid">
      <div class="cell" v-for="i in 101*101" :ref="i-1"></div>
    </div>
    <Drawer title="坐标点集" :closable="false" v-model="isShow">
      <Table stripe :columns="columns" :data="points"></Table>
    </Drawer>
  </div>
</template>

<script>
  export default {
    name: "DDA",
    data() {
      return {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0,
        isShow: false,
        points: [],
        columns: [
          {
            title: '数目',
            key: 'index',
          },
          {
            title: '坐标',
            key: 'point',
          }
        ],
        inv: {},
      }
    },
    methods: {
      getLine(x1, y1, x2, y2) {
        let step = Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2))
        let dx = (x2 - x1) / step
        let dy = (y2 - y1) / step

        let points = [[x1, y1]]
        while (Math.abs(x1 - x2) >= 1e-5) {
          x1 += dx
          y1 += dy
          points.push([Math.round(x1), Math.round(y1)])
          console.log(x1, y1, x2, y2)
        }
        return points
      },
      draw() {
        this.reset()
        let points = this.getLine(this.x1, this.y1, this.x2, this.y2)
        console.log(points)

        let now = 0
        this.inv = setInterval(
          () => {
            if (now >= points.length) {
              clearInterval(this.inv)
              return
            }
            let p = points[now]
            let x = 50 - p[1]
            let y = 50 + p[0]
            console.log(p[0], p[1], x, y)
            let index = x * 101 + y
            console.log(index)
            this.$refs[index][0].style.background = 'deepskyblue'
            now++
          },
          200
        )
        this.points = points.map(
          (value, index) => ({
            'index': index,
            'point': `${value[0]}, ${value[1]}`
          })
        )
      },
      reset() {
        this.points = []
        this.isShow = false
        clearInterval(this.inv)
        //  坐标轴设置为黑色
        // 50 50 是原点
        for (let i = 0; i <= 100; i++) {
          for (let j = 0; j <= 100; j++) {
            let index = i * 101 + j
            if (i == 50 || j == 50)
              this.$refs[index][0].style.background = 'black'
            else
              this.$refs[index][0].style.background = 'lightgrey'
          }
        }
      }
    },
    mounted() {
      this.reset()
    }
  }
</script>

<style scoped>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .grid {
    display: flex;
    width: 1012px;
    /*height: 1002px;*/
    flex-wrap: wrap;
    border: 1px solid black;
    box-sizing: border-box;
    height: 1000px;
  }

  .cell {
    display: flex;
    width: 10px;
    height: 10px;
    border: 1px solid black;
    background: lightgrey;
    box-sizing: border-box;
  }

  .axis {
    background: black;
  }

  .line {
    background: deepskyblue;
  }
</style>
