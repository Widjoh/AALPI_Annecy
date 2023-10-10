<template>
  <div class="w-96 mx-auto h-96">
    <div class="grid">
      <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="flex">
        <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell flex justify-center items-center" :class="{ active: cell === 1 }"
             @click="toggleCell(rowIndex, colIndex)">
         .
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grid: [], // Le tableau représentant le quadrillage
      rows: 20, // Nombre de lignes du quadrillage
      cols: 20, // Nombre de colonnes du quadrillage
    };
  },
  created() {
    this.initializeGrid();
    this.generate(this.grid, this.rows, this.cols)
  },
  methods: {
    initializeGrid() {
      for (let row = 0; row < this.rows; row++) {
        const newRow = [];
        for (let col = 0; col < this.cols; col++) {
          newRow.push(this.getRandomValue());
        }
        this.grid.push(newRow);
      }
    },
    getRandomValue() {
      return Math.random() < 0.5 ? 0 : 1; // 50% de chances d'obtenir 0 ou 1
    },
    toggleCell(rowIndex, colIndex) {
      const currentValue = this.grid[rowIndex][colIndex];
      this.grid[rowIndex][colIndex] = currentValue === 0 ? 1 : 0;
    },
    generate(grid, rows, cols) {
      setInterval(() => {
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            let arrNeigh = [];
            let cell = grid[r][c];

            let aboveCell;
            let belowCell;
            let leftCell;
            let rightCell;

            // Check the cell above
            if (r > 0) {
              aboveCell = grid[r - 1][c];
              if (aboveCell === 1) {
                arrNeigh.push({value: 1});
              }
            }

            // Check the cell below
            if (r < rows - 1) {
              belowCell = grid[r + 1][c];
              if (belowCell === 1) {
                arrNeigh.push({value: 1});
              }
            }

            // Check the cell to the left
            if (c > 0) {
              leftCell = grid[r][c - 1];
              if (leftCell === 1) {
                arrNeigh.push({value: 1});
              }
            }

            // Check the cell to the right
            if (c < cols - 1) {
              rightCell = grid[r][c + 1];
              if (rightCell === 1) {
                arrNeigh.push({value: 1});
              }
            }

            // Check the cell above-left
            if (r > 0 && c > 0) {
              const aboveLeftCell = grid[r - 1][c - 1];
              if (aboveLeftCell === 1) {
                arrNeigh.push({value: 1});
              }
            }

            // Check the cell above-right
            if (r > 0 && c < cols - 1) {
              const aboveRightCell = grid[r - 1][c + 1];
              if (aboveRightCell === 1) {
                arrNeigh.push({value: 1});
              }
            }

            // Check the cell below-left
            if (r < rows - 1 && c > 0) {
              const belowLeftCell = grid[r + 1][c - 1];
              if (belowLeftCell === 1) {
                arrNeigh.push({value: 1});
              }
            }

            // Check the cell below-right
            if (r < rows - 1 && c < cols - 1) {
              const belowRightCell = grid[r + 1][c + 1];
              if (belowRightCell === 1) {
                arrNeigh.push({value: 1});
              }
            }


            const numNeighboors = arrNeigh.reduce((acc, o) => acc + parseInt(o.value), 0);

            if (cell === 1 && (numNeighboors < 2)) {
              cell = 0;
            } else if (cell === 1 && (numNeighboors > 3)) {
              cell = 0
            } else if (cell === 0 && (numNeighboors === 3)) {
              cell = 1
            } else{
              cell = grid[r][c]
            }
            grid[r][c] = cell;
          }
        }
      }, 100);
    }
  }
}


</script>

<style scoped>
.grid {
  display: grid;
  grid-gap: 1px;
  background-color: #000;
  border: solid black 1px;
}

.cell {
  flex: 1;
  background-color: #fff;
  cursor: pointer;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}

.cell.active {
  background-color: blue;
}
</style>
