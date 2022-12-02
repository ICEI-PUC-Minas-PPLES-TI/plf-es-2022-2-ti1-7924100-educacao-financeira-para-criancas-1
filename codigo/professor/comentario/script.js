var lsForm = {
    entries: [],
    clear: function(){
      localStorage.clear();
      this.entries = [];
      this.print();
    },
    get_html:function(){
      var html = '<button type="button" id="' + this.name + '_clearForm" class="btn btn-sm btn-secondary mb-2">Apagar comentários</button>';
      html += '<table class="table">';
      if (this.entries.length === 0) {
        html += '<tr><td colspan="2">Sem comentários por enquanto.</td></tr>';
      } else {
        html += "<thead><tr>";
        this.entries[0].forEach(function(i){
          html += "<th>"
          + i.name +"|" + "</th>";
        }); 
        html += "</tr></thead>";
        html += "<tbody>";
        this.entries.forEach(function(i){
          html += "<tr>";
          i.forEach(function(j){
            html += "<td>" + j.value + "</td>";
          });
          html += "</tr>";
        }); 
        html += '</tbody></table>';
      }
      return html;
    },
    print: function(){
      var self = this;
      var html = lsForm.get_html();
      $('#' + this.list).html(html);
      $('#' + this.name + '_clearForm').on("click", function(e){
        self.clear();
      });
    },
    get_form_data: function(){
      return this.form.serializeArray();
    },
    get: function(){
      return localStorage[this.name];
    },
    set: function(){
      this.entries.push(this.get_form_data());
      localStorage.setItem(this.name, JSON.stringify(this.entries));
      this.print();
    },
    init: function(name, list){
      var self = this;
      this.name = name;
      this.list = list;
      this.form = $('#' + this.name);
      if (localStorage[this.name] !== undefined) {
        this.entries = JSON.parse(this.get());
      }
      this.print();
      this.form.on('submit', function(e){
        e.preventDefault();
        self.set();
      });
    }
  }
  lsForm.init('entryForm', 'entries');