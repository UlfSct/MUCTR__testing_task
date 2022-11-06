<template>
  <table>
    <thead>
    <tr>
      <th
          v-for="header in table.headers"
      >
        {{ header }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="element in table.rows"
    >
      <td> {{ element.id }}</td>
      <td> {{ element.date }}</td>
      <td> {{ element.language }}</td>
      <td> {{ element.text }}</td>
      <td v-if="element.translatedText"> {{ element?.translatedText }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "my-table",
  props: {
    table: {
      type: Object
    }
  }
}

</script>

<style scoped>

table {
  width: 100%;
  border: none;
}

table thead th {
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #008B70;
  font-size: 14px;
  color: white;
}


table tbody td {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}

table tbody tr:nth-child(even) {
  background: #A8CCC5;
}

table tbody tr:nth-child(odd) {
  background: #CFE6E1;
}

</style>