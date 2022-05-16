<script lang="ts">
interface $$Props {
  name: string
  hex: string
  rgb: string
  hsl: string
}

export let name: string;
export let hex: string;
export let rgb: string;
export let hsl: string;

name = name.replace(/([A-Z])/g, " $1")
name = name.charAt(0).toUpperCase() + name.slice(1)
</script>
<tr>
  <th>
    <div class="flex items-center space-x-3">
      <div class="avatar">
        <div class="mask mask-squircle w-10 h-10" style="background: { rgb } none repeat scroll 0% 0%"/>
      </div>
      <div>
        <div class="font-bold">{ name }</div>
      </div>
    </div>
  </th>
  <td>{ hex }</td>
  <td>{ rgb }</td>
  <td>{ hsl }</td>
</tr>