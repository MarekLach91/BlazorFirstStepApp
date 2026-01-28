namespace BlazorFirstStepApp.Models
{
    public class ThemeSettings
    {
        public bool IsDarkMode { get; set; }
        public string ButtonClass => IsDarkMode ? "btn-dark" : "btn-light";
        public string BgClass => IsDarkMode ? "bg-light text-dark" : "bg-dark text-white";
    }
}
