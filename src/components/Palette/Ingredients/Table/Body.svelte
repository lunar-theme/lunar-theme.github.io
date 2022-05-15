<script lang="ts">
import paletteData from '@data/palette.json'
import Row from './Row.svelte'
const palette = paletteData as Palette
</script>
<tbody>
  {#each Object.entries(palette) as [name, color]}
    <Row name={name} hex={color.hex} rgb={color.rgb} hsl={color.hsl} />
  {/each}
</tbody> 