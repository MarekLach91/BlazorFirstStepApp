namespace BlazorFirstStepApp
{
    public class GlobalState
    {
        public event Action OnChange = default!;
        public readonly List<string> MessageFirst = new();
        public readonly List<string> MessageSecond = new();

        public void SendMessageToFirstChat(string message)
        {
            MessageFirst.Add(message);
            NotifyStateChanged();
        }


        public void SendMessageToSecondChat(string message)
        {
            MessageSecond.Add(message);
            NotifyStateChanged();
        }

        public void NotifyStateChanged() => OnChange?.Invoke();
        // gdziekolwiek jest wywoływane OnChange, tam zostaną powiadomione wszystkie subskrybujące komponenty

    }
}
